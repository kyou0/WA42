/**
 * ガールフレンドを表すクラス。
 */
public class GirlFriend {
    /**
     * @var string 名前を表すプロパティ。
     */
    private String _name;
    /**
     * @var int 誕生年を表すプロパティ。
     */
    private int _birthYear;
    /**
     * @var int 誕生月を表すプロパティ。
     */
    private int _birthMonth;
    /**
     * @var int 誕生日を表すプロパティ。
     */
    private int _birthDay;


    public GirlFriend(String name, int birthYear, int birthMonth, int birthDay) {
        _name = name;
        _birthYear = birthYear;
        _birthMonth = birthMonth;
        _birthDay = birthDay;
    }


    public String getName() {
        return _name;
    }

    public int getBirthYear() {
        return _birthYear;
    }

    public int getBirthMonth() {
        return _birthMonth;
    }

    public int getBirthDay() {
        return _birthDay;
    }

    public int getAge() {
        return 2018-_birthYear;
    }



}
