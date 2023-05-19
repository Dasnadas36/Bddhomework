package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "C:\\Users\\Lenovo\\IdeaProjects\\Bddhomework\\src\\test\\resources\\Features\\Register.Feature",
        glue = {"StepDefinitions"},
        format = {"pretty","html:htmlReport"},
        dryRun = false
)
public class TestRunner {
}
