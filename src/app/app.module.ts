// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

// import { AppRoutingModule } from './app-routing.module'; 
// import { RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { TodoListComponent }      from './components/todo-list.component';
// import { TodoService } from './services/todo.services';
// import { HeaderComponent }      from './components/header.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     TodoListComponent,
//     // HeaderComponent,
//   ],
//   imports: [
//     AppRoutingModule,
//     RouterModule,
//     BrowserModule,
//     FormsModule,
//     // HttpModule,
//   ],
//   providers: [
//     TodoService,
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppModule { 
  
// }
//config.tsを削除した
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoService } from './services/todo.services';
import { routes } from './app.routes'; // ルート設定のインポート

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    // HeaderComponent, // 必要に応じてコメントアウト解除
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), // RouterModule の設定
    // 他の必要なモジュールをここに追加
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule { }
