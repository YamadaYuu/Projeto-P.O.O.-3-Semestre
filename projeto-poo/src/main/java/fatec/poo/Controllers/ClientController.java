package fatec.poo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import fatec.poo.entities.Client;
import fatec.poo.entitiesRepositorys.ClientRepository;

@RestController
public class ClientController {
	@Autowired
	private ClientRepository clientRepository;
	
	@PostMapping(value = "/signUp")
	public ResponseEntity<Client> clientSignUp(@RequestBody String data) {
		Gson gson = new Gson();
		
		Client client = gson.fromJson(data, Client.class);
		clientRepository.save(client);
		
		System.out.println(data); 
		
		return ResponseEntity.ok().body(client);
		
	}
	
	@GetMapping(value = "/readClients")
	public ResponseEntity<List<Client>> readClient(){
		List<Client> clients = clientRepository.findAll();
		
		return ResponseEntity.ok().body(clients);
	}
	
}
