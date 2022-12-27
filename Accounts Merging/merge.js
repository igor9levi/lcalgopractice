const dfs = function(graph, node, visited) {
    visited[node] = true;
    let output = {
        emails: [node],
        applications: [],
    }

    for (const email of graph[node].edges) {
        if (!visited[email]) {
            const { emails } = dfs(graph, email, visited);
            output = {
                emails: output.emails.concat(emails),
                applications: [...new Set([...output.applications, ...graph[email].applications])],
            };
        }
    }
    return output;
}

const accountsMerge = function(accounts) {
    const graph = {};

    for (const account of accounts) {
        const { emails, name, application } = account;

        for (let i = 0; i < emails.length; i++) {
            const email = emails[i];
            const previousEmail = emails[i - 1];
            

            if (!graph[email]) {
                graph[email] = {
                    edges: [],
                    applications: [application],
                    name
                }
            } else if (!graph[email].applications.includes(application)) {
                graph[email].applications.push(application);
            }

            if (previousEmail != undefined) {
                if (!graph[previousEmail].edges.includes(email)) {
                    graph[previousEmail].edges.push(email);
                    graph[email].edges.push(previousEmail);
                }
            }
        }
    }
   
    let visited = {};
    const emails = Object.keys(graph);
    let merged = [];
    
    for (const email of emails) {
        if (!visited[email]) {
            const { emails, applications } = dfs(graph, email, visited);
            
            merged.push({ 
                name: graph[email].name,
                emails, 
                applications, 
            });
        }
    }

    return merged;    
};

module.exports = accountsMerge;