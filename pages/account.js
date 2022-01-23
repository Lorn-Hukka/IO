const Account = () => {
    return (  
        <div>
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" placeholder="jan.kowalski@gamil.com" />
        <label htmlFor="password">Hasło:</label>
        <input type="password" name="password" id="password" placeholder="jan.kowalski@gamil.com" />
        <button>ZALOGUJ SIĘ</button>
        </div>
    );
}
 
export default Account;