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


        System.out.println("クラスの確認2:誕生日リマインダ");

        for (int Month = 1; Month < 12; Month++) {

            boolean flg = true;

            System.out.println(Month + "月");

            for (GirlFriend girl : girls) {
                if (Month == girl.getBirthMonth()) {
                    StringBuffer names = new StringBuffer();
                    names.append(girl.getName());
                    names.append("ちゃんが");
                    names.append(girl.getBirthDay());
                    names.append("日に誕生日です。");
                    names.append(girl.getAge());
                    names.append("歳になります。メッセージを送りましょう。");

                    System.out.println(names.toString());
                    flg = false;
                }
            }
            if (flg) {
                System.out.println("誕生日を迎える女性はいません。安心してください。");
            }
        }

    }
}
