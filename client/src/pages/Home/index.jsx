import styles from "./styles.module.css";
function Home({ user }) {
    if (!user) return <h2>Loading...</h2>;

    console.log("User Picture URL:", user.picture);

    const logout = () => {
        window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
    };

    return (
        <div className={styles.container}>
			
            {/* <h1 className={styles.heading}>Home</h1> */}
            <div className={styles.profileContainer}>
                <div className={styles.left}>
                    {/* Left side content */}
                </div>
                <div className={styles.right}>
                    <h2 className={styles.from_heading}>Login Profile</h2>
                    {/* Displaying Profile Picture or Placeholder */}
                    {user.picture ? (
                        <img src={user.picture} alt="profile" className={styles.profile_img} />
                    ) : (
                        <div className={styles.profilePlaceholder}>
                            {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                    )}
                    <input
                        type="text"
                        defaultValue={user.name}
                        className={styles.input}
                        placeholder="UserName"
                    />
                    <input
                        type="text"
                        defaultValue={user.email}
                        className={styles.input}
                        placeholder="Email"
                    />
                    <button className={styles.btn} onClick={logout}>
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;

