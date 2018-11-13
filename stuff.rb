          <% if current_user %>
          <li><%= link_to "LOGOUT", destroy_user_session_path, method: :delete %></li>
          <% else %>
          <li><%= link_to "LOGIN", new_user_session_path %></li>
          <% end %>



          <% if current_user %>
          <%= link_to '', edit_home_path(event), class: "glyphicon glyphicon-pencil", style:"margin:0 7px; color: yellow;" %>
          <!-- Path must be show path aka home_path(event) -->
          <%= link_to '', home_path(event), method: :delete, data: {confirm: "Are you sure?"}, style:'color:red', class: "glyphicon glyphicon-trash" %>     
	      	</div>
          <% end %>