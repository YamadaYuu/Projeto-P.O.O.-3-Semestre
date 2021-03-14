package fatec.poo.entitiesRepositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import fatec.poo.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long>{

}
