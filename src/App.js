import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    const carNamesInput = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );

    const carNamesSplit = carNamesInput.split(',').map((name) => name.trim());

    let nameInvalid = carNamesSplit.some(
      (name) => name.length > 5 || name.length === 0
    );

    if (nameInvalid) {
      throw new Error('[ERROR]');
    }

    const numberCountInput = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?'
    );

    const numberCount = Number(numberCountInput);
    const numberCountInvalid =
      isNaN(numberCount) || numberCount <= 0 || !Number.isInteger(numberCount);

    if (numberCountInvalid) {
      throw new Error('[ERROR]');
    }
  }
}

export default App;
