

export default function UserForm(props) {

  const { values, update, submit } = props

  const onChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form boxForm' onSubmit={onSubmit}>
      <div className=''>
        <label>Username
          <input name="username" type="text" placeholder="What's your name ?" maxLength="20" value={values.username} onChange={onChange} />
        </label>

        <label>Email
          <input name="email" type="email" placeholder="Type your email" value={values.email} onChange={onChange} />
        </label>

        <label>Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select a Role --</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
  
}



