import React,{Component} from "react";
import axios from "axios";
class Create extends Component{
    constructor(props)
    {
        super(props);
        this.state={
        cname:"",
        pname:"",
        year:"",
        lead_actor:"",
        channelno:"",
        episodes:"",
        showsdata:[],
    };
    }
    componentDidMount(){
        axios.get("http://localhost:8080/get")
        .then(response =>{
            this.setState({
                showsdata:response.data
                
            });
        });
    }
    handleCname = (event) =>{
        this.setState({ cname : event.target.value});
    };
    handlePname = (event) =>{
        this.setState({ pname : event.target.value});
    };
    handleyear = (event) =>{
        this.setState({ year : event.target.value});
    };
    handleLeadActor = (event) =>{
        this.setState({ lead_actor: event.target.value});
    };
    handleChannelNo = (event) =>{
        this.setState({ channelno : event.target.value});
    };
    handleEpisodes=(event)=>{
        this.setState({ episodes : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data ={
            cname: this.state.cname,
            pname: this.state.pname,
            year: this.state.year,
            lead_actor: this.state.lead_actor,
            channelno: this.state.channelno,
            episodes:this.state.episodes,
        };
        console.log(data);
        axios.post("http://localhost:8080/post",data).then((response)=>{
            this.setState({
                showsdata:[...this.state.showsdata,response.data],
                cname:"",
                pname:"",
                year:"",
                lead_actor:"",
                channelno:"",
                episodes:"",
            });
        });
    };

    handleDelete = (id) => {
        // Send DELETE request to remove fuel data with the given ID
        axios.delete(`http://localhost:8080/delete/${id}`).then((response) => {
            // Update the state to remove the deleted fuel data
            const updateData = this.state.showsdata.filter(
                (user) => user.id !== id
            );
            this.setState({ showsdata: updateData });
        });
    };
    handleEdit = (data) => {
        this.setState({
            id: data.id,
            cname: data.cname,
            pname: data.pname,
            year: data.year,
            lead_actor: data.lead_actor,
            channelno: data.channelno,
            episodes: data.episodes,
            isEdit: true,
        });
        console.log(this.state.id);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };
    handleUpdate= (event) => {
        event.preventDefault();
        const data = {
            cname: this.state.cname,
            pname: this.state.pname,
            year: this.state.year,
            lead_actor: this.state.lead_actor,
            channelno: this.state.channelno,
            episodes: this.state.episodes,
        };
        const id = this.state.id;
        axios.put(`http://localhost:8080/update/${id}`, data).then((res) => {
                console.log(res.data);
                this.setState({
                    cname:"",
                    pname:"",
                    year:"",
                    lead_actor:"",
                    channelno:"",
                    episodes:"",
                });
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };
    render()
    {
        return(
            <div>
            <form style={{marginTop:"20px",marginLeft:"20px",marginBottom:"20px",justifyContent:"center"}} onSubmit={this.handleSubmit} className="tab" >
               <label>Channel Name</label>
               <input
               className="tab"
               type="text"
               style={{marginBottom:"10px"}}
               onChange={this.handleCname}
               value={this.state.cname}
               /><br></br>
               <label>Program Name</label>
               <input
               className="tab"
               type="text"
               style={{marginBottom:"10px"}}
               onChange={this.handlePname}
               value={this.state.pname}
               /><br></br>
               <label>Year</label>
               <input
               className="tab"
               type="number"
               style={{marginBottom:"10px"}}
               onChange={this.handleyear}
               value={this.state.year}
               /><br></br>
               <label>Lead Actor</label>
               <input
               className="tab"
               type="text"
               style={{marginBottom:"10px"}}
               onChange={this.handleLeadActor}
               value={this.state.lead_actor}
               /><br></br>
               <label>Channel No</label>
               <input
               className="tab"
               type="number"
               style={{marginBottom:"10px"}}
               onChange={this.handleChannelNo}
               value={this.state.channelno}
               /><br></br>
               <label>Episodes</label>
               <input
               className="tab"
               type="number"
               style={{marginBottom:"10px"}}
               onChange={this.handleEpisodes}
               value={this.state.episodes}
               /><br></br>
               <button style={{width:"100px"}}className="submitt" type="submit">SUBMIT</button>
            </form>
               <table className="output" border={2}>
               <thead>
                   <tr>
                       <th>Id</th>
                       <th>Channel Name</th>
                       <th>Program Name</th>
                       <th>Year</th>
                       <th>Lead Actor</th>
                       <th>ChannelNo</th>
                       <th>Episodes</th>
                       <th>Edit</th>
                       <th>Delete</th>
                   </tr>
               </thead>
               <tbody>
                   {this.state.showsdata.map((data) => (
                       <tr key={data.id}>
                           <td>{data.id}</td>
                           <td>{data.cname}</td>
                           <td>{data.pname}</td>
                           <td>{data.year}</td>
                           <td>{data.lead_actor}</td>
                           <td>{data.channelno}</td>
                           <td>{data.episodes}</td>
                           <td>
                               <button onClick={() => this.handleEdit(data)}>Edit</button>
                           </td>

                           <td>
                               <button onClick={() => this.handleDelete(data.id)}>
                                   Delete
                               </button>
                           </td>
                       </tr>
                   ))}
               </tbody>
           </table>
           <br></br>
           <form onSubmit={this.handleUpdate}>
               <input type="hidden" name="id" value={this.state.id} />
               <label>Channel Name</label>
               <input
                   type="text"
                   name="cname"
                   value={this.state.cname}
                   onChange={this.handleInputChange}
               />
               <br />
               <label>Program Name</label>
               <input
                   type="text"
                   name="pname"
                   value={this.state.pname}
                   onChange={this.handleInputChange}
               />
               <br />
               <label>Year</label>
               <input
                   type="number"
                   name="year"
                   value={this.state.year}
                   onChange={this.handleyear}
               />
               <br />
               <label>LeadActor</label>
               <input
                   type="text"
                   name="lead_actor"
                   onChange={this.handleInputChange}
                   value={this.state.lead_actor}
               />
               <br />
               <label>ChannelNo</label>
               <input
                   type="number"
                //    name="channnelno"
                   onChange={this.handleInputChange}
                   value={this.state.channelno}
               />
               <br />
               <label>Episodes</label>
               <input
                   type="number"
                   name="episodes"
                   onChange={this.handleInputChange}
               value={this.state.episodes}
               />
               <br />
               <button type="submit">Save</button>
           </form>     
           </div>
               );
    }
}
export default Create;