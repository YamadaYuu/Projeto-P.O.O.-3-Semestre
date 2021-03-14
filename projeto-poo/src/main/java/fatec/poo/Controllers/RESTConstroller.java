package fatec.poo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import fatec.poo.entities.Client;
import fatec.poo.entitiesRepositorys.ClientRepository;


@RestController
public class RESTConstroller {
	@Autowired
	private ClientRepository clientRepository;

	@GetMapping(value = "/get")
	public String getJson() {
		
		return null;
	}
	
	@PostMapping(value = "/post")
	public String postJson(@RequestBody String data) {
		Gson gson = new Gson();
		
		Client a = gson.fromJson(data, Client.class);

		System.out.println(a.getName());
		
		clientRepository.save(a);
 
		return null;
	}
	
}
