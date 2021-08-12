const Users=({users})=>{
    return(<div className="users">
    {users.map(user=>{
        const {id,avatar_url,login,html_url}=user;
        
        return(<section className="user-dtls" key={id}>
                    
                        <img className="img-section" src={`${avatar_url}`} alt="" />
                        <p className="login">{login}</p>
                        <a href={html_url} target="_blank" className="profile">Profile</a>
                   

            </section >)
    }

    )}
    </div>)
}

export default Users;