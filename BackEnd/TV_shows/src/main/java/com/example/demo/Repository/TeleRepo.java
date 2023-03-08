package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Television;

public interface TeleRepo extends JpaRepository<Television,Integer> {

}
