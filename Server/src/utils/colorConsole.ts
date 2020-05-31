import colors from 'colors';

class colorConsole {
  public static red(...str: Array<String>) {
    console.log(colors.red(str.join(' ')));
  }

  public static green(...str: Array<String>) {
    console.log(colors.green(str.join(' ')));
  }

  public static yellow(...str: Array<String>) {
    console.log(colors.yellow(str.join(' ')));
  }

  public static gray(...str: Array<String>) {
    console.log(colors.gray(str.join(' ')));
  }
}

export default colorConsole;
