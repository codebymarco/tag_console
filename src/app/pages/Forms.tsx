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
    navigate(`/console/${userID}/forms/${id}`);
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
        data.filter((form:any) =>
          form.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [data, searchQuery]);

  return (
    <div className="forms">
      {show ? <CreateForm refetch={refetch} onCancel={() => setShow(false)} /> : null}
      <div className="forms-top">
      <h1 className="forms-heading">Forms</h1>
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
        {filteredData.length > 0 ? (
          filteredData.map((form) => {
            return (
              <div onClick={() => goTo(form._id!)} className="forms-box" key={form._id}>
                <div>
                  <h1>{form.name}</h1>
                  <p>{form.status ? "active": "unactive"}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="noforms">
            <p>No forms found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forms;
