package com.sunbeam.controller;

import java.util.Random;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.EmailAndPasswordDto;
//import com.sunbeam.dto.Credential;
import com.sunbeam.dto.EmialDTO;
import com.sunbeam.dto.Response;
import com.sunbeam.dto.resultDto;
import com.sunbeam.pojos.User;
import com.sunbeam.service.EmailService;
import com.sunbeam.service.IUserService;




@CrossOrigin(origins = "*")
@RestController


public class EmailController{
	Random random=new Random(1000);
	
	@Autowired
	private EmailService emailservice;
	
    @Autowired
    private IUserService userService;
	
	@PostMapping("/sendotp")
	public resultDto Signup(@RequestBody EmialDTO req) {	
		
		
		resultDto resultdto=null;
	
		
		System.out.println("EMAIL"+req.getEmail());
		
		User validuser=userService.checkEmail(req.getEmail());
		System.out.println(req.getEmail());
		if(validuser!=null) {
			int otp=random.nextInt(999999);
			String subject ="OTP from Snehalaya Adoption Center";
			String message="your Reset password message OTP = "+otp+" ";
			String to=req.getEmail();
			boolean flag=this.emailservice.sendEmail(subject, message, to);		
			if(flag) {
				resultdto=new resultDto("success",otp);
			}else {
				resultdto=new resultDto("failure",otp);
			}
		}else{
			System.out.println("Ohhh sorrry ");
		}
				 
		return resultdto;
	}
	
	
	@PostMapping("/resetPassword")
	public ResponseEntity<?> resetPassword(@RequestBody EmailAndPasswordDto cred){
		System.out.println(cred.toString());
		System.out.println("inside passwordreset");
		System.out.println(cred.getEmail());
		System.out.println(cred.getPassword());
		User validuser=userService.checkEmail(cred.getEmail());
		System.out.println(validuser);
		User persistentUser=userService.restPass(validuser,cred.getPassword());
		if(persistentUser!=null) {
			System.out.println("successfully changed the password");
			return Response.success("Password changed sucessfully");
		}else {
			return Response.error("Password Not changed");
		}
		
	}
	
	
	
	
	

}
