package birthdayreminder;

import birthdayreminder.GirlFriend;

public class birthdayReminderkai {
    public static void main(String[] args) {
//        birthdayreminder.GirlFriend girl = new birthdayreminder.GirlFriend("まゆみ", 1989, 1,5);
        GirlFriend[] girls = {
                new GirlFriend("まゆみ", 1988, 1, 5),
                new GirlFriend("さちこ", 1993, 5, 15),
                new GirlFriend("まい", 1986, 5, 25),
                new GirlFriend("なみ", 1989, 8, 3),
                new GirlFriend("えり", 1991, 11, 19),
                new GirlFriend("りえ", 1987, 12, 23)
        };

        StringBuffer respect = new StringBuffer("ちゃんが");
        StringBuffer nameBirthday = new StringBuffer("日に誕生日です。");
        StringBuffer messege = new StringBuffer("ちゃんが");


        System.out.println("クラスの確認2:誕生日リマインダ");

        for (int Month = 1; Month < 12; Month++) {

            boolean flg = true;

            System.out.println(Month + "月");

            for (GirlFriend girl : girls) {
                if (Month == girl.getBirthMonth()) {
                    System.out.println(girl.getName() + respect + girl.getBirthDay() + nameBirthday + girl.getAge() + messege);
                    flg = false;
                }
            }
            if (flg) {
                System.out.println("誕生日を迎える女性はいません。安心してください。");
            }
        }

    }
}
