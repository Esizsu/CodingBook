package com.codingbook.runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

    @RunWith(Cucumber.class)
    @CucumberOptions(
            features = "src/test/resources/features",
            // Glue path java folderdan sonra baslamali yani src/test/java dan sonra
            //baslarsa UnderfinedStepException hatasi verir.
            glue = "com/codingbook/stepdef",
            //dryrun true diyince git stepdef'in icindeki methodlari calistir iclerini
            //calistirmaz sadece methodlarin var mi yok mu onu verify yapar.Bu da bize eger step defin snipit (given,then)
            //onlar yoksa onlari yazdirmayi sagliyor
            dryRun =false,
            strict = true,
           //tags = "@smoke_test, @unit_test",
            plugin = {"html:target/default-cucumber-reports",
                    "json:target/cucumber.json"
            }
    )
    public class Runner {

    }


