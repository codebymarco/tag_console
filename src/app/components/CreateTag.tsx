import "../styles/components/createTag.css";

interface TemplateProps {
  onCancel: () => void;
}

const EditName: React.FC<TemplateProps> = () => {


  return (
    <div className="createTag">
      <div className="left">
        <h1>Basic Information</h1>
        <input type="text" placeholder="Tag Name" />
        <textarea placeholder="Description" rows={3}></textarea>

        <hr />

        {/* Script Details Section */}
        <h1>Script Details</h1>
        <input type="text" placeholder="Script URL" />
        <textarea placeholder="Inline Script" rows={5}></textarea>
        <select name="scriptType" id="scriptType">
          <option value="">Select Script Type</option>
          <option value="external">External</option>
          <option value="internal">Inline</option>
        </select>
        <div className="options">
          <label>
            <input type="checkbox" name="async" />
            Async
          </label>
          <label>
            <input type="checkbox" name="defer" />
            Defer
          </label>
        </div>

        <hr />

        {/* Triggers Section */}
        <h1>Triggers</h1>
        <select name="triggers" multiple>
          <option value="pageView">Page View</option>
          <option value="click">Click</option>
          <option value="scroll">Scroll</option>
          <option value="formSubmit">Form Submission</option>
          <option value="historyChange">History Change</option>
          <option value="customEvent">Custom Event</option>
        </select>
        <input type="text" placeholder=""/>

        <div className="trigger-conditions">
          <input type="text" placeholder="URL Pattern" />
        </div>
        {/* Attributes & Options Section */}
        <h1>Attributes & Options</h1>
        <label>
          Execution Timing
          <select name="executionTiming">
            <option value="domReady">On DOM Ready</option>
            <option value="windowLoad">On Window Load</option>
            <option value="delay">After Delay</option>
            <option value="immediate">Immediately</option>
          </select>
        </label>
        <label>
          Position
          <select name="position">
            <option value="head">Head</option>
            <option value="bodyBefore">Body (before body tag)</option>
            <option value="bodyAfter">Body (after body tag)</option>
          </select>
        </label>
      </div>

      <div className="right">
        {/* Advanced Settings Section */}
        <h1>Advanced Settings</h1>
        <input type="number" placeholder="Priority" min="1" />
        <input type="text" placeholder="Dependencies (comma separated)" />

        <label>
          Error Handling
          <select name="errorHandling">
            <option value="retry">Retry on Fail</option>
            <option value="ignore">Ignore</option>
            <option value="notify">Notify User</option>
          </select>
        </label>

        <hr />

        {/* Targeting Options Section */}
        <h1>Targeting Options</h1>
        <input
          type="text"
          placeholder="Page Targeting (comma separated URLs)"
        />
        <input
          type="text"
          placeholder="User Targeting (e.g., logged-in, location)"
        />

        <hr />

        {/* Status & Activation Section */}
        <h1>Status & Activation</h1>
        <label>
          <input type="checkbox" name="enable" />
          Enable Tag
        </label>

        <hr />

        {/* Preview & Testing Section */}
        <h1>Preview & Testing</h1>
        <label>
          <input type="checkbox" name="previewMode" />
          Enable Preview Mode
        </label>
        <input type="text" placeholder="Test URL" />
      </div>
    </div>
  );
};

export default EditName;
