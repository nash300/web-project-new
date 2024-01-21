const Registration = () => {
  return (
    <div id="registration-form">
      <form action="">
        <label>Name *</label>
        <input type="text" />
        <label>Email *</label>
        <input type="text" />
        <label>Country</label>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <label>Subject *</label>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <label>Discipline *</label>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <label>Platform *</label>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <label>User ID *</label>
        <input type="text" />
        <label>About</label>
        <textarea type="text" rows="4" cols="50" />
      </form>
    </div>
  );
};

export default Registration;
