package com.example.demo.Controllers;
import java.util.ArrayList;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Entity.Television;
import com.example.demo.Service.Tservice;
@CrossOrigin
@RestController
public class Tcontroller {
@Autowired
private Tservice obj;

@PostMapping("/post")
public Television postdetail(@RequestBody Television pts) {
	return obj.adddetail(pts);
}

@GetMapping("/get")
public List<Television> showdetail()
{
	List<Television> li=new ArrayList<>();
	li=obj.getdetail();
	return li;
}

@PutMapping("/update/{id}")
public Television updatedets(@PathVariable int id,@RequestBody Television pts) {
	return obj.updatedetail(id, pts);
}

@DeleteMapping("/delete/{id}")
public String deletedets(@PathVariable int id) {
	obj.deletedetail(id);
	return "deleted Successfully";
}
}