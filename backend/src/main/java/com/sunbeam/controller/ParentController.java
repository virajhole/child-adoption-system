package com.sunbeam.controller;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.AdoptionformDTO;
import com.sunbeam.dto.Response;
import com.sunbeam.pojos.Adoptionform;
import com.sunbeam.pojos.DocumentMaster;
import com.sunbeam.pojos.User;
import com.sunbeam.service.IDocumentMasterService;
import com.sunbeam.service.IParentService;
import com.sunbeam.service.IUserService;

@RestController
@RequestMapping("/parent")
@CrossOrigin
public class ParentController {

	@Autowired
	IParentService pService;

	@Autowired
	IUserService userService;
	
	@Autowired
	IDocumentMasterService docService;

	@PostMapping("/addadoptionform")
	public ResponseEntity<?> addNewForm(@RequestBody AdoptionformDTO formDto) {
		System.out.println(formDto);
		Adoptionform formEntity = AdoptionformDTO.ToEntity(formDto);
		User user = userService.findUserById(formDto.getUser_id());
		if (user == null) {
			return Response.error("Can't find your Account");
		} else {
			formEntity.setUser(user);
			formEntity = pService.adoptionform(formEntity);
			if (formEntity != null) {
				return Response.success(formEntity);
			} else {
				return Response.error("Failed To Save Child Adoption Form");
			}

		}
	}

	// View Adoption form response
	@GetMapping("/viewresponse/{id}")
	public ResponseEntity<?> showEnquiries(@PathVariable int id) {
	User user = userService.findUserById(id);
	
	List<Adoptionform> adoptionforms = pService.findAllByUser(user);
	
	 Stream<AdoptionformDTO> result = adoptionforms.stream().map(Adoptionform -> AdoptionformDTO.ToDto(Adoptionform));
	
//	 result.forEach(e->System.out.println(e));
//	Adoptionform form = pService.findResponse(id);
		return Response.success(result);
	}

	// View Document response
	@GetMapping("/viewdocumentrespons/{id}")
	public ResponseEntity<?> showDocumentEnquiries(@PathVariable int id) {
//		User user = userService.findUserById(id);
//		
//		List<DocumentMaster> document = docService.findAllByUser(user);
//		Stream<DocumentMasterInputDTO> result =document.stream().map(DocumentMaster -> DocumentMasterInputDTO.ToDto(DocumentMaster));
		List<DocumentMaster> document = pService.findDocumentResponse(id);
		
		return Response.success(document);
	}

	// request to get the list of all child
	@GetMapping("/childdetails")
	public ResponseEntity<?> showChilds() {
//		System.out.println(pService.showallchilds());
		return new ResponseEntity<>(pService.showallchilds(), HttpStatus.OK);
	}

	// Find Form By Id
	@GetMapping("/{id}")
	public ResponseEntity<?> findFormById(@PathVariable("id") int id) {
		Adoptionform adoptionform = pService.findFormById(id);
		AdoptionformDTO result = AdoptionformDTO.ToDto(adoptionform);

		if (adoptionform != null) {
			return Response.success(result);
		} else {
			String message = "Form not exist";
			return Response.error(message);
		}
	}

}
