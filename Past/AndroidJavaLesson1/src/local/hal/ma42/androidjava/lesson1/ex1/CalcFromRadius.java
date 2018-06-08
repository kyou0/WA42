package local.hal.ma42.androidjava.lesson1.ex1;

/**
 * MA42 Android用Java文法 Lesson1 Ex1
 *
 * 実行クラス。
 *
 * @author Shinzo
 *
 */
public class CalcFromRadius {
    public static void main(String[] args) {
        double[] rList = {1,3,5,7,9};
        for (double radius: rList) {
            CalcCircleAndBall calc = new CalcCircleAndBall(radius);
            System.out.println("半径" + calc.getRadius() + "の計算結果");
            System.out.println("円周：" + calc.getCircle());
            System.out.println("円面積：" + calc.getArea());
            System.out.println("球面積：" + calc.getSurface());
            System.out.println("球体積：" + calc.getRadius());
        }
    }
}