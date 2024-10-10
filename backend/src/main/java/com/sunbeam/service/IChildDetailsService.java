package com.sunbeam.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.dto.ChildProfileUpdateDTO;
import com.sunbeam.pojos.ChildDetails;

public interface IChildDetailsService {

	ChildDetails update(int id, ChildDetails child);

	List<ChildDetails> findAllChild();

	ChildDetails findChildById(int id);

	void deleteChild(int id);

	ChildDetails addChild(ChildDetails child, MultipartFile image);

	ChildDetails editChild(ChildDetails child, ChildProfileUpdateDTO childDetailsDTO, MultipartFile image);

}
