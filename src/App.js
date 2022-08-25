import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const notify = () => {
		toast("Wow so easy!");
		toast.success("🦄 Wow so easy!", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<div>
			<button onClick={notify}>Notify!</button>
			<a href="https://fkhadra.github.io/react-toastify/introduction/">Demo</a>
			<ToastContainer />
		</div>
	);
}
export default App;
