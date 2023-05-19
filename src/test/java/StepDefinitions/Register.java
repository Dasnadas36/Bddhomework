package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Register {
    WebDriver driver;
    @Given("^User able to open Browser$")
    public void user_able_to_open_Browser()   {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @Given("^Enter an Url$")
    public void enter_an_Url()   {
        driver.get("https://demo.nopcommerce.com/");
    }

    @When("^User click on Register Link$")
    public void user_click_on_Register_Link()   {
    driver.findElement(By.xpath("/html/body/div[6]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a")).click();
    }

    @When("^User on Register Page$")
    public void user_on_Register_Page()  {

    }

    @Then("^User Select a \"([^\"]*)\"$")
    public void user_Select_a(String Gender)   {
        driver.findElement(By.xpath("//*[@id=\"gender-male\"]")).click();
    }

    @Then("^Enter \"([^\"]*)\" And \"([^\"]*)\"$")
    public void enter_And(String Firstname, String LastName)  {
    driver.findElement(By.xpath("//*[@id=\"FirstName\"]")).sendKeys(Firstname);
    driver.findElement(By.xpath("//*[@id=\"LastName\"]")).sendKeys(LastName);
    }

    @Then("^Enter \"([^\"]*)\",\"([^\"]*)\"And \"([^\"]*)\"$")
    public void enter_And(String  Day, String Month, String Year)   {
    driver.findElement(By.xpath("/html/body/div[6]/div[3]/div/div/div/div[2]/form/div[1]/div[2]/div[4]/div/select[1]")).sendKeys(Day);
    driver.findElement(By.xpath("/html/body/div[6]/div[3]/div/div/div/div[2]/form/div[1]/div[2]/div[4]/div/select[2]")).sendKeys(Month);
    driver.findElement(By.xpath("/html/body/div[6]/div[3]/div/div/div/div[2]/form/div[1]/div[2]/div[4]/div/select[3]")).sendKeys(Year);
    }

    @Then("^User Enter \"([^\"]*)\" And \"([^\"]*)\"$")
    public void user_Enter_And(String EmailAddress, String CompanyName)   {
    driver.findElement(By.xpath("//*[@id=\"Email\"]")).sendKeys(EmailAddress);
    driver.findElement(By.xpath("//*[@id=\"Company\"]")).sendKeys(CompanyName);
    }

    @Then("^Enter \"([^\"]*)\"$")
    public void enter(String Password)   {
    driver.findElement(By.xpath("//*[@id=\"Password\"]")).sendKeys(Password);
    }

    @Then("^Enter Final \"([^\"]*)\"$")
    public void enter_Final(String ConfirmPassword)   {
     driver.findElement(By.xpath("//*[@id=\"ConfirmPassword\"]")).sendKeys(ConfirmPassword);
    }




    @Then("^Click On \"([^\"]*)\"$")
    public void click_On(String RegisterButton)   {
    driver.findElement(By.xpath("//*[@id=\"register-button\"]")).click();
    }

    @Then("^Close Browser$")
    public void close_Browser()   {
        driver.close();
    }


}
