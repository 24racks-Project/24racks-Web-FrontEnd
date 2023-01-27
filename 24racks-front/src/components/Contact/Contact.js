import EmailIcon from '@mui/icons-material/Email';
import './contact.css';

function Contact(){
  return <div className="Contact">
  <h1 className='title'>Contact's</h1>
  <p><EmailIcon sx={{ fontSize: 12 }}/> customer@24racks.com</p>
</div>;
}

export default Contact;