package com.example.Project.Dlook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableWebMvc
public class DlookApplication {

	public static void main(String[] args) {
		SpringApplication.run(DlookApplication.class, args);
	}

}
