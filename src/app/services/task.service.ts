import {Injectable} from "@angular/core";
import {Task} from "../models/task";
import {Http} from "@angular/http";
import {ExtractData, HandleError} from "./service-helper";
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';

@Injectable()
export class TaskService {
    private taskUrl = "api/tasks";

    constructor(private http: Http) {}
  
    get(): Promise<Task[]>{
        return Promise.resolve([
            {id: 1, text: "Gathering Requirements", start_date: "2018-07-01 00:00", duration: 3, progress: 0.6},
            {id: 2, text: "Design", start_date: "2018-07-04 10:00", duration: 2, progress: 0.4},
            {id: 3, text: "Implementation", start_date: "2018-07-07 09:00", duration: 5, progress: 0.0},
            {id: 4, text: "Verification", start_date: "2018-07-13 00:00", duration: 3, progress: 0.0},
            {id: 5, text: "Maintenance", start_date: "2018-07-16 00:00", duration: 3, progress: 0.0}
        ]);
    }
    
//     get(): Promise<Task[]>{
//       return this.http.get(this.taskUrl)
//           .toPromise()
//           .then(ExtractData)
//           .catch(HandleError);
//   }

    insert(task: Task): Promise<Task> {
        return this.http.post(this.taskUrl, JSON.stringify(task))
            .toPromise()
            .then(ExtractData)
            .catch(HandleError);
    }


    update(task: Task): Promise<void> {
        return this.http
            .put('${this.taskUrl}/${task.id}', JSON.stringify(task))
            .toPromise()
            .then(ExtractData)
            .catch(HandleError);
    }

    remove(id: number): Promise<void> {
        return this.http.delete('${this.taskUrl}/${id}')
            .toPromise()
            .then(ExtractData)
            .catch(HandleError);
    }
}