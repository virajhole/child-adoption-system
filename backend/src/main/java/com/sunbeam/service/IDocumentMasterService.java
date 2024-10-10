package com.sunbeam.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.pojos.DocumentMaster;
import com.sunbeam.pojos.User;

public interface IDocumentMasterService {

	DocumentMaster findDocById(int id);

	DocumentMaster findDocumentById(int id);

	void deleteDocument(int id);

	List<DocumentMaster> findAllDocuments();

	DocumentMaster saveDocument(int id, DocumentMaster doc, MultipartFile addressProof, MultipartFile identityProof,
			MultipartFile incomeProof, MultipartFile nationalityCertificate, MultipartFile nonCriminal_certificate);

	List<DocumentMaster> findAllByUser(User user);

}
