function protect_email(email)
{
    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@")
        {
            let arr = email.split("@")
            let sliced = arr[0].slice(0, 4)
            console.log(sliced + "…" + "@" + arr[1]);
        }
        
    }
}

protect_email("benreddadamine@gmail.com")