package fatec.poo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import fatec.poo.entities.Client;
import fatec.poo.entitiesRepositorys.ClientRepository;

@SpringBootApplication
public class ProjetoPooApplication implements CommandLineRunner {

	@Autowired
	private ClientRepository clientRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(ProjetoPooApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		Client cliente = new Client();
		cliente.setBirthDate("2020-01-01");
		cliente.setEmail("admin@admin.com");
		cliente.setGender("Feminino");
		cliente.setName("Administrador");
		cliente.setSenha("1");
		cliente.setTelefone("123456789");
		clientRepository.save(cliente);
		
		Client cliente2 = new Client();
		cliente2.setBirthDate("2020-01-03");
		cliente2.setEmail("teste@admin.com");
		cliente2.setGender("Masculino");
		cliente2.setName("Pessoa");
		cliente2.setSenha("1");
		cliente2.setTelefone("987456321");
		clientRepository.save(cliente2);
	}
	
}
