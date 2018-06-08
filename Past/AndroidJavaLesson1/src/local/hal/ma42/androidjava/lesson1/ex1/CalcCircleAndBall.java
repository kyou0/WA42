package local.hal.ma42.androidjava.lesson1.ex1;

/**
 * MA42 Android用Java文法 Lesson1 Ex1
 *
 * 円周計算クラス。
 *
 * @author Shinzo SAITO
 */
public class CalcCircleAndBall {
    /**
     * 半径を表すフィールド。
     */
    private double _radius = 0;

    /**
     * 円周率を表す定数フィールド。
     */
    private static final double PI = 3.14;

    /**
     * コンストラクタ。
     * @param  radius 半径
     */
    public CalcCircleAndBall(double radius) {
        _radius = radius;
    }

    /**
     * 半径を得るメソッド
     * @return 半径。
     */
    public double getRadius() {
        return _radius;
    }

    /**
     * 円周を得るメソッド。
     * @return 計算される円周。
     */
    public double getCircle() {
        double circle = 2 * PI * _radius;
        return circle;
    }

    /**
     * 円の面積を得るメソッド。
     * @return 計算された円の面積。
     */
    public double getArea() {
        double area = PI * _radius * _radius;
        return area;
    }

    /**
     * 球の表面積を得るメソッド。
     *
     * @return 計算された球の表面積。
     */
    public double getSurface() {
        double surface = 4 * PI * _radius * _radius;
        return surface;
    }

    /**
     * 球の体積を得るメソッド。
     *
     * @return 計算された球の体積。
     */
    public double getVolume() {
        double volume = 4 * PI * _radius * _radius * _radius / 3;
        return volume;
    }
}
