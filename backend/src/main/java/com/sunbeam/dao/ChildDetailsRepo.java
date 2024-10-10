package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbeam.pojos.ChildDetails;

public interface ChildDetailsRepo extends JpaRepository<ChildDetails, Integer> {

	@Query(value="select * from child_details where status='Available'",nativeQuery=true)
	List<ChildDetails> findByStatus();
}
