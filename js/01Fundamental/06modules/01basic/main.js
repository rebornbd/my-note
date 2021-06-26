// import the module
import process from './process.js';


process("https://api.github.com/users")
    .then(res => {
        let html = `<div class="container">`
        html += "<table class='table table-striped table-hover'>";
        html += `<thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">USERNAME</th>
                        <th scope="col">FOLLOWERS</th>
                        <th scope="col">PROFILE</th>
                    </tr>
                </thead>`;
        html += `<tbody>`;
        for(let i=0; i < res.length; i++) {
            html += `<tr>
                <th scope='row'>${i+1}</th>
                <td><a href='${res[i].html_url}' target="_blank">${res[i].login}</a></td>
                <td><a href='${res[i].followers_url}' target="_blank">followers</a></td>
                <td><a href='${res[i].html_url}' target="_blank"><img class='profileImg' src='${res[i].avatar_url}' /></a></td>
            </tr>`;
        }
        html += `</tbody>`;
        html += `</table>`;
        html += `</div>`;

        let root = document.querySelector("#root");
        root.innerHTML = html;
    }, rej => {

    })
