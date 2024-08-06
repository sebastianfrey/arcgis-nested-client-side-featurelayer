const readline = require('readline');
const fs = require('fs');

function analyzeProfile(filePath) {
  return new Promise((resolve) => {
    //const filePath = './profiles/layers-155_features-125.json'; // Replace with the path to your file

    const readInterface = readline.createInterface({
      input: fs.createReadStream(filePath),
      console: false
    });

    const frameEventsByFrameSeqId = new Map();
    console.log('Start reading file...', filePath);
    readInterface.on('line', function (line) {
      line = line.replace(/,$/, '');
      try {
        const parsedLine = JSON.parse(line);
        const name = parsedLine?.name;
        const frameSeqId = parsedLine?.args?.frameSeqId;
        const pid = parsedLine?.pid;

        if (typeof frameSeqId !== 'number' || typeof pid !== 'number') {
          return;
        }

        let frameSeqIdEvents = frameEventsByFrameSeqId.get(`${frameSeqId}-${pid}`);
        if (!frameSeqIdEvents) {
          frameEventsByFrameSeqId.set(`${frameSeqId}-${pid}`, [{
            name: parsedLine.name,
            ...parsedLine.args
          }]);
          return;
        }

        frameSeqIdEvents.push({
          name: parsedLine.name,
          ...parsedLine.args
        });
      } catch (error) {}
    });

    readInterface.on('close', function () {
      console.log('Finished reading file...', filePath);

      const statistics = {
        total: frameEventsByFrameSeqId.size,
        frame: 0,
        droppedFrame: 0,
        partialPresentedFrame: 0,
        timePerFrame: 0,
      };

      for (const [frameId, frameEvents] of frameEventsByFrameSeqId) {
        if (frameEvents.length === 1) {
          continue;
        }
        let frameType = 'frame';
        for (const frameEvent of frameEvents) {
          if (frameEvent.name === 'DroppedFrame') {
            if (frameEvent.hasPartialUpdate) {
              frameType = 'partial-presented-frame';
              break;
            }
            frameType = 'dropped-frame';
            break;
          }
        }
        switch (frameType) {
          case 'frame':
            statistics.frame++;
            break;
          case 'dropped-frame':
            statistics.droppedFrame++;
            break;
          case 'partial-presented-frame':
            statistics.partialPresentedFrame++;
            break;
        }
      }

      resolve(statistics);
    });
  });
}


fs.readdir('./profiles', async (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  console.log('Files in directory:');
  const statistics = await Promise.all(files.map(async file => {
    const match = file.match(/layers-(\d+)_features-(\d+)/);
    const layers = Number(match[1]);
    const features = Number(match[2]);
    console.info('Start analyzing...', file);
    const statistic = await analyzeProfile(`./profiles/${file}`);
    console.info('Finished analyzing...', file);
    return { ...statistic, layers, features };
  }));
  console.info({ statistics });
});