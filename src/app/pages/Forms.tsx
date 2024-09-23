import "../styles/pages/forms.css";
import { useNavigate, useParams } from "react-router-dom";
import useAuthenticatedGetRequest from "../hooks/useGetData";
import { api } from "../api/api";
import { useStore } from "../store/store";
import { form } from "../helpers/helpers";
import { useState, useEffect } from "react";
import CreateForm from "../components/CreateForm";

const Forms = () => {
  const { userID } = useParams();
  const { user } = useStore();

  const navigate = useNavigate();
  const goTo = (id: string) => {
    navigate(`/console/${userID}/forms/formid`);
  };

  const { data, refetch } = useAuthenticatedGetRequest(
    `${api}/api/user/forms/all/${userID}`,
    user.token
  );

  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<form[]>([]);

  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter((form: any) =>
          form.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [data, searchQuery]);

  return (
    <div className="forms">
      {show ? (
        <CreateForm refetch={refetch} onCancel={() => setShow(false)} />
      ) : null}
      <div className="forms-top">
        <h1 className="forms-heading">Containers</h1>
        <div>
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={() => setShow(true)}>Add</button>
        </div>
      </div>
      <div className="forms-container">
        <div onClick={() => goTo("userid")} className="forms-box" key={""}>
          <div>
            <h1>name</h1>
            <p>active</p>
          </div>
        </div>
        <div onClick={() => goTo("userid")} className="forms-box" key={""}>
          <div>
            <h1>name</h1>
            <p>active</p>
          </div>
        </div>
        <div onClick={() => goTo("userid")} className="forms-box" key={""}>
          <div>
            <h1>name</h1>
            <p>active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
