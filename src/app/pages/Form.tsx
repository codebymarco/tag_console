import { Link, useParams } from "react-router-dom";
import "animate.css";
import "../styles/pages/form.css";
import { useEffect, useState } from "react";
import Templates from "../components/Templates";
import { MdDelete, MdEdit } from "react-icons/md";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FaRegEye } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import EditFormName from "../components/EditFormName";
import EditEmail from "../components/EditEmail";
import EditTitle from "../components/EditTitle";
import EditReplyEmailContent from "../components/EditReplyEmailContent";
import EditReplyEmail from "../components/EditReplyEmail";
import EditFieldName from "../components/EditFieldName";
import EditFieldEmail from "../components/EditFieldEmail";
import EditFieldBody from "../components/EditFieldBody";
import ConfirmDeleteForm from "../components/dialogs/ConfirmDeleteForm";
import EditStatus from "../components/EditStatus";
import Preview from "../components/Preview";
import { useStore } from "../store/store";
import useAuthenticatedGetRequest from "../hooks/useGetData";
import { api } from "../api/api";
import { form } from "../helpers/helpers";

const Form = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [showThemes, setShowThemes] = useState(false);
  /*   const [showCustomize, setShowCustomize] = useState(false);
   */ const [showDetails, setShowDetails] = useState(false);
  const [showGeneral, setShowGeneral] = useState(false);
  const [showFields, setShowFields] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // edit modals
  const [showFormName, setShowFormName] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showReplyEmailContent, setShowReplyEmailContent] = useState(false);
  const [showReplyEmail, setShowReplyEmail] = useState(false);

  // edit field modals
  const [showEditFieldEmail, setShowEditFieldEmail] = useState(false);
  const [showEditFieldName, setShowEditFieldName] = useState(false);
  const [showEditFieldBody, setShowEditFieldBody] = useState(false);

  // edit field modals
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showEditFormStatus, setShowEditFormStatus] = useState(false);

  // fetch data
  const { formID } = useParams();
  const { user } = useStore();
  const { data, refetch } = useAuthenticatedGetRequest(
    `${api}/api/user/forms/${formID}`,
    user.token
  );
  const [form, setForm] = useState<form>({});

  useEffect(() => {
    if (data) {
      setForm(data);
    }
  }, [data]);

  const copyScript = () => {
    const scriptToCopy = `
      <script> window.siteId = "${formID}"</script>  \n
      <script defer src="https://formio-integration.vercel.app/formio.js"></script>
    `;
    navigator.clipboard
      .writeText(scriptToCopy)
      .then(() => {})
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  return (
    <div className="form">
      {showPreview ? (
        <Preview
          template={form.theme!}
          form={form}
          onCancel={() => setShowPreview(false)}
        />
      ) : null}{" "}
      {showThemes ? (
        <Templates
          data={form}
          refetch={refetch}
          onCancel={() => setShowThemes(false)}
        />
      ) : null}
      {/*       {showCustomize ? (
        <Customize
          template=""
          updateTemplate={() => console.log("hello")}
          onCancel={() => setShowCustomize(false)}
        />
      ) : null} */}
      {showFormName ? (
        <EditFormName
          refetch={refetch}
          data={form}
          onCancel={() => setShowFormName(false)}
        />
      ) : null}
      {showEmail ? (
        <EditEmail
          refetch={refetch}
          data={form}
          onCancel={() => setShowEmail(false)}
        />
      ) : null}
      {showTitle ? (
        <EditTitle
          refetch={refetch}
          data={form}
          onCancel={() => setShowTitle(false)}
        />
      ) : null}
      {showReplyEmailContent ? (
        <EditReplyEmailContent
          refetch={refetch}
          data={form}
          onCancel={() => setShowReplyEmailContent(false)}
        />
      ) : null}
      {showReplyEmail ? (
        <EditReplyEmail
          refetch={refetch}
          data={form}
          onCancel={() => setShowReplyEmail(false)}
        />
      ) : null}
      {showEditFieldName ? (
        <EditFieldName
          refetch={refetch}
          data={form}
          onCancel={() => setShowEditFieldName(false)}
        />
      ) : null}
      {showEditFieldEmail ? (
        <EditFieldEmail
          refetch={refetch}
          data={form}
          onCancel={() => setShowEditFieldEmail(false)}
        />
      ) : null}
      {showEditFieldBody ? (
        <EditFieldBody
          refetch={refetch}
          data={form}
          onCancel={() => setShowEditFieldBody(false)}
        />
      ) : null}
      {showDeleteForm ? (
        <ConfirmDeleteForm onCancel={() => setShowDeleteForm(false)} />
      ) : null}
      {showEditFormStatus ? (
        <EditStatus
          refetch={refetch}
          data={form}
          onCancel={() => setShowEditFormStatus(false)}
        />
      ) : null}
      <div className="form-top">
        <Link to="/">forms/{form.name!}</Link>
        <FaRegEye
          className="form-preview-icon"
          onClick={() => setShowPreview(true)}
        />
        {/* spin up preview window here with the current data */}
      </div>
      <div className="form-content">
        <div className="form-section">
          <div className="form-section-top">
            <h1>design</h1>
            {showDetails ? (
              <SlArrowUp
                className="form-toggle-icon"
                onClick={() => setShowDetails(!showDetails)}
              />
            ) : (
              <SlArrowDown
                className="form-toggle-icon"
                onClick={() => setShowDetails(!showDetails)}
              />
            )}
          </div>

          {showDetails ? (
            <div className="form-section-container">
              <div
                className="form-section-box"
                onClick={() => setShowThemes(true)}
              >
                <div>
                  <h1 className="label">theme</h1>
                  <span className="value">{form.theme!}</span>
                </div>
                <MdEdit className="form-edit-icon" />
              </div>
              {/*               <div className="form-section-box">
                <div>
                  <h1 className="label">customize theme</h1>
                  <span className="value">edit your theme</span>
                </div>
                <MdEdit
                  className="form-edit-icon"
                  onClick={() => setShowCustomize(true)}
                />
              </div> */}
            </div>
          ) : null}
        </div>

        <div className="form-section-integration">
          <div className="form-section-integration-top">
            <div>
              <h1>integration</h1>
              <p>copy and paste this in your site</p>
            </div>
          </div>
          <div className="form-section-integration-content">
            <div>
              <p>{`<script> window.siteId = "${formID}"</script>`}</p>
              <p>{`<script defer src="https://formio-integration.vercel.app/formio.js"></script>`}</p>
            </div>
            <IoCopyOutline
              onClick={copyScript}
              className="form-copy-icon animate__animated animate__pulse animate__infinite"
            />
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-top">
            <h1>general</h1>
            {showGeneral ? (
              <SlArrowUp
                className="form-toggle-icon"
                onClick={() => setShowGeneral(!showGeneral)}
              />
            ) : (
              <SlArrowDown
                className="form-toggle-icon"
                onClick={() => setShowGeneral(!showGeneral)}
              />
            )}
          </div>

          {showGeneral ? (
            <div className="form-section-container">
              <div className="form-section-box">
                <div>
                  <h1 className="label">form id</h1>
                  <span className="value">{form._id!}</span>
                </div>
              </div>
              <div
                className="form-section-box"
                onClick={() => setShowFormName(true)}
              >
                <div>
                  <h1 className="label">form name</h1>
                  <span className="value">{form.name!}</span>
                </div>
                <MdEdit className="form-edit-icon" />
              </div>

              <div
                className="form-section-box"
                onClick={() => setShowEmail(true)}
              >
                <div>
                  <h1 className="label">reciever email</h1>
                  <span className="value">{form.email}</span>
                </div>
                <MdEdit className="form-edit-icon" />
              </div>

              <div
                className="form-section-box"
                onClick={() => setShowTitle(true)}
              >
                <div>
                  <h1 className="label">title</h1>
                  <span className="value">{form.title}</span>
                </div>
                <MdEdit className="form-edit-icon" />
              </div>

              <div
                className="form-section-box"
                onClick={() => setShowReplyEmail(true)}
              >
                <div>
                  <h1 className="label">reply email</h1>
                  <span className="value">{form.reply_email!.toString()}</span>
                </div>
                <MdEdit className="form-edit-icon" />
              </div>

              <div
                className="form-section-box"
                onClick={() => setShowReplyEmailContent(true)}
              >
                <div>
                  <h1 className="label">reply email content</h1>
                  <span className="value">
                    {form.reply_email_content?.slice(0, 20)} ...
                  </span>
                </div>
                <MdEdit className="form-edit-icon" />
              </div>
            </div>
          ) : null}
        </div>

        <div className="form-section">
          <div className="form-section-top">
            <h1>fields</h1>
            {showFields ? (
              <SlArrowUp
                className="form-toggle-icon"
                onClick={() => setShowFields(!showFields)}
              />
            ) : (
              <SlArrowDown
                className="form-toggle-icon"
                onClick={() => setShowFields(!showFields)}
              />
            )}
          </div>

          {showFields ? (
            <div className="form-section-container">
              <div
                className="form-section-box"
                onClick={() => setShowEditFieldName(true)}
              >
                <div>
                  <h1 className="label">name</h1>
                  <span className="value">{form.namefield!.toString()}</span>
                </div>
                <MdEdit className="form-edit-icon" />
              </div>
              <div
                className="form-section-box"
                onClick={() => setShowEditFieldEmail(true)}
              >
                <div>
                  <h1 className="label">email</h1>
                  <span className="value">{form.emailfield!.toString()}</span>
                </div>
                <MdEdit className="form-edit-icon" />
              </div>

              <div
                className="form-section-box"
                onClick={() => setShowEditFieldBody(true)}
              >
                <div>
                  <h1 className="label">body</h1>
                  <span className="value">{form.bodyfield!.toString()}</span>
                </div>
                <MdEdit className="form-edit-icon" />
              </div>
            </div>
          ) : null}
        </div>

        <div className="form-section">
          <div className="form-section-top">
            <h1>settings</h1>
            {showSettings ? (
              <SlArrowUp
                className="form-toggle-icon"
                onClick={() => setShowSettings(!showSettings)}
              />
            ) : (
              <SlArrowDown
                className="form-toggle-icon"
                onClick={() => setShowSettings(!showSettings)}
              />
            )}
          </div>

          {showSettings ? (
            <div className="form-section-container">
              <div
                className="form-section-box"
                onClick={() => setShowEditFormStatus(true)}
              >
                <div>
                  <h1 className="label">status</h1>
                  <span className="value">{form.status!.toString()}</span>
                </div>
                <MdEdit className="form-edit-icon" />
              </div>
              <div
                className="form-section-box"
                onClick={() => setShowDeleteForm(true)}
              >
                <div>
                  <h1 className="label">delete form</h1>
                  <span className="value">delete</span>
                </div>
                <MdDelete className="form-delete-icon" />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Form;
