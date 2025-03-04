package com.portfolio.sterry96.repository;

import com.sterry96.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // User 엔티티의 기본 CRUD 메서드를 제공
}
