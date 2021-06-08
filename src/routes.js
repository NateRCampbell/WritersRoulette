import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Auth from "./components/Auth";
import Info from "./components/Info";
import UserDash from "./components/UserDash";
import Prompts from "./components/Prompts";
import CreatePost from "./components/CreatePost";
import Submission from "./components/Submission";
import ReadRoulette from "./components/ReadRoulette";

export default (
   <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/auth" component={Auth} />
      <Route path="/info" component={Info} />
      <Route path="/user_dash" component={UserDash} />
      <Route path="/prompts" component={Prompts} />
      <Route path="/create_new" component={CreatePost} />
      <Route path="/new_submission" component={Submission} />
      <Route path="/read_roulette" component={ReadRoulette} />
   </Switch>
);
