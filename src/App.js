import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    MissionUtils.Console.print(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    const carNamesInput = await MissionUtils.Console.readLineAsync('');

    const carNamesSplit = carNamesInput.split(',').map((name) => name.trim());

    const nameInvalid = carNamesSplit.some(
      (name) => name.length > 5 || name.length < 1
    );

    if (nameInvalid) {
      throw new Error('[ERROR]');
    }

    MissionUtils.Console.print('시도할 횟수는 몇 회인가요?');
    const numberCountInput = await MissionUtils.Console.readLineAsync('');

    const numberCount = Number(numberCountInput);
    const numberCountInvalid =
      isNaN(numberCount) || numberCount < 1 || !Number.isInteger(numberCount);

    if (numberCountInvalid) {
      throw new Error('[ERROR]');
    }

    const cars = carNamesSplit.map((name) => ({
      name,
      position: 0,
    }));

    MissionUtils.Console.print('\n실행 결과');
    for (let i = 0; i < numberCount; i++) {
      cars.forEach((car) => {
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

        if (randomNumber >= 4) {
          car.position++;
        }
      });
    }

    cars.forEach((car) => {
      const result = `${car.name} : ${'-'.repeat(car.position)}`;
      MissionUtils.Console.print(result);
    });
  }
}

export default App;
