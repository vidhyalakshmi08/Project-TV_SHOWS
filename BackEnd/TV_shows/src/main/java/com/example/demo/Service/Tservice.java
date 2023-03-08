package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Entity.Television;
import com.example.demo.Repository.TeleRepo;

@Service
public class Tservice {

	@Autowired
	private TeleRepo repo;
	
	public Television adddetail(Television obj) {
		return repo.save(obj);
	}
	
	public List<Television> getdetail(){
		List<Television> arr=new ArrayList<>();
		arr=repo.findAll();
		return arr;
	}
	
	public Television updatedetail(int id,Television obj) {
		return repo.saveAndFlush(obj);
	}
	
	public String deletedetail(int id) {
		repo.deleteById(id);
		return "deleted successfully";
	}
	
}
