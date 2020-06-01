package com.umi.ga.hadoop_api.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.io.IOException;

@SpringBootApplication(exclude =
        {DataSourceAutoConfiguration.class, HibernateJpaAutoConfiguration.class})
@ImportResource("classpath:spring/*.xml")
@EnableScheduling
public class HadoopLogApiApplication {
    public static void main(String[] args) throws IOException, InterruptedException {
        SpringApplication.run(HadoopLogApiApplication.class, args);
    }
}
