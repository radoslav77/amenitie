from django.shortcuts import render, redirect
from .forms import *
from django.contrib.auth import login, logout, authenticate 
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse, HttpResponseNotFound
# Create your views here.


#Registaration
def register(request):
    if request.user.is_authenticated:
        return redirect('calc:index')
        #if not logged in the register
    else:
        if request.method == "POST":
            form = registrationForm(request.POST or None)
            #Check if form is valid 
            if form.is_valid():
                user = form.save()
                
                # Get user password
                raw_password = form.cleaned_data.get('password1')
                
                #authenticate user 
                user = authenticate(username=user.username, password= raw_password)
                #login user
                login(request,user)
                return redirect('calc:index')
        else:
            form = registrationForm()
       
        return render(request, 'user/register.html',{'form':form}) 
    
#Login    
def login_user(request):
    if request.user.is_authenticated:
        return redirect('calc:index')
        #if not logged in then log in 
    else:
        if request.method == "POST":
            username = request.POST['username']
            password = request.POST['password']
            
            #Check credential
            user = authenticate(username=username,password=password)
            
            if user is not None:
                if user.is_active:
                    login(request,user)
                    return redirect('calc:index')
                else:
                    return render(request, 'user/login.html',{'error':"Your account has been desaibled."})
                
            else:
                return render(request, 'user/login.html',{'error':'Invalid username or password. Try Again.'})
                
        return render (request, 'user/login.html')
                
                
#logout user          
def logout_user(request):
    if request.user.is_authenticated:
        
        logout(request)
        return redirect('user:login_user')
    else:
        return redirect('user:login_user')
#profile view
def profile(request):
    if request.user.is_authenticated: 
        return render(request, "user/profile.html")

    else:
        return redirect('calc:index')        
        