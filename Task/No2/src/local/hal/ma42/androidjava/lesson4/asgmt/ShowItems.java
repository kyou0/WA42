package local.hal.ma42.androidjava.lesson4.asgmt;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;

public class ShowItems {
    public static void main(String[] args) {
        Map<Integer, Item> stock = new HashMap<>();

        Item title1 = new Item(0, "Info: RSSフィードのURLが変わります", "http://cgi.itmedia.co.jp/rss/ait_2.0/corp/corp/info/2018/04/16/rss-2/", "2018年4月16日までにRSSフィードをご登録いただいていた方は、6月末日までにURLをご変更ください。", Timestamp.valueOf("2018-04-16 16:00:00"));
        Item title2 = new Item(1, "AWS、AWS Summit Tokyo 2018でSageMakerとQuickSightの新機能、AWS Fargateの提供予定を発表", "http://cgi.itmedia.co.jp/rss/ait_2.0/atit/ait/articles/1806/04/news060.html", "Amazon Web Services（以下、AWS）は2018年6月1日、AWS Summit Tokyo 2018で、機械学習プロセス自動化サービス「Amazon SageMaker」およびBIツールの「Amazon QuickSight」についての新機能を紹介した。SageMakerはChainerに対応、QuickQightはライセンスコストの無駄を防ぐ新料金体系が注目される。また、AWS Fargateを東京リージョンで2018年7月に提供予定という。", Timestamp.valueOf("2018-04-16 16:00:00"));
        Item title3 = new Item(2, "活用の幅が広がる「AR／VR」、2017〜2022年の市場における年平均成長率は71.6％の見通し――IDC", "http://cgi.itmedia.co.jp/rss/ait_2.0/atit/ait/articles/1806/04/news037.html", "IDCの最新予測によると、世界AR／VR市場の2017〜2022年の年平均成長率は71.6％となり、2018年のAR／VR製品およびサービスの売上高は前年比92％増の270億ドルに達する見通しだ。", Timestamp.valueOf("2018-04-16 16:00:00"));

        stock.put(46887, title1);
        stock.put(12457, title2);
        stock.put(63544, title3);

        System.out.println("---------------ヘッドライン------------------");
        for (Map.Entry<Integer, Item> element : stock.entrySet()) {
            Integer Key = element.getKey();
            Item person = element.getValue();

            StringBuffer sbCurry = new StringBuffer();
            sbCurry.append("---------記事ID：\n");
            sbCurry.append(Key);
            sbCurry.append(person.getId() + "\n");
            sbCurry.append(person.getTitle() + "\n");
            sbCurry.append(person.getPubDate() + "\n");
            sbCurry.append(person.getDesc() + "\n");
            sbCurry.append(person.getUrl() + "\n");
            System.out.println(sbCurry);


        }
    }
}
