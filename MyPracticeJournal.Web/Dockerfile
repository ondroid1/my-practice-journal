#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM microsoft/dotnet:2.1-aspnetcore-runtime-nanoserver-1803 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.1-sdk-nanoserver-1803 AS build
WORKDIR /src
COPY ["MyPracticeJournal.Web/MyPracticeJournal.Web.csproj", "MyPracticeJournal.Web/"]
COPY ["MyPracticeJournal.BusinessLogic/MyPracticeJournal.BusinessLogic.csproj", "MyPracticeJournal.BusinessLogic/"]
COPY ["MyPracticeJournal.DataAccess/MyPracticeJournal.DataAccess.csproj", "MyPracticeJournal.DataAccess/"]
RUN dotnet restore "MyPracticeJournal.Web/MyPracticeJournal.Web.csproj"
COPY . .
WORKDIR "/src/MyPracticeJournal.Web"

#ENV NODE_VERSION 8.9.4
#ENV NODE_DOWNLOAD_SHA 48946e99ac4484e071df25741d2300f3a656f476c5ff3f8116a4746c07ebe3b7
#
#RUN Invoke-WebRequest -UseBasicParsing https://nodejs.org/dist/v${env:NODE_VERSION}/node-v${env:NODE_VERSION}-win-x64.zip -outfile node.zip; 
#if ((Get-FileHash node.zip -Algorithm sha256).Hash -ne $env:NODE_DOWNLOAD_SHA) { 
#Write-Host 'NODEJS CHECKSUM VERIFICATION FAILED!'; 
#exit 1; 
#}; 

#Expand-Archive node.zip -DestinationPath nodejs-tmp; 
#Move-Item nodejs-tmp/node-v${env:NODE_VERSION}-win-x64 "${Env:ProgramFiles}/nodejs"; 
#Remove-Item -Force node.zip; 
#Remove-Item -Force nodejs-tmp
#
#RUN setx /M PATH $($Env:PATH + ';' + $Env:ProgramFiles + '/nodejs')
#RUN npm install -g npm
#RUN npm install

RUN dotnet build "MyPracticeJournal.Web.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "MyPracticeJournal.Web.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "MyPracticeJournal.Web.dll"]