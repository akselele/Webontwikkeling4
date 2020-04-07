package controller;


import com.google.gson.JsonObject;
import domain.Person;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

public class GetFriends extends RequestHandler {
    @Override
    public void handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        HttpSession session = request.getSession();
        Person person = (Person) session.getAttribute("user");
        response.setContentType("application/json");
        try{
            response.getWriter().write(toJson(person.getFriends()));
        } catch(IOException e){
            System.out.println(e.getMessage());
        }
    }

    private String toJson(List<Person> list) {
        JsonObject json = new JsonObject();
        for (Person person : list) {
            JsonObject user = new JsonObject();
            user.addProperty("name", person.getFirstName());
            user.addProperty("status", person.getStatus());
            json.add(person.getLastName(), user);
        }
        return json.toString();
    }
}
