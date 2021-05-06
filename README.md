# Node Server

### Intro
<p>This node application serves as a program interface for a linode hosted MYSQL server.</p>

<p>Here are a few key objectives for this API</p>
  <ul>
    <li>Basic CRUD operations</li>
    <li>Protected endpoints</li>
    <li>User authentication</li>
    <li>Setting / using cookies</li>
    <li>Setting / using caching</li>
  </ul>
  
  
### Methods
My previous attempts at a node based API have stopped short of protecting the end points. This attempt will be both comprehensive <br>
and careful. I'll work on MVPs for each of the objectives in the order they are listed and then loop back to improve on each objective <br>
afterwards. I will start by creating basic CRUD operations for a single users table, then protecting the routes used in those operations <br> 
and keep with that pattern for each of the other objectives. Once I'm through with the first iteration I will go back to build out, <br>
optimize, and refactor.
