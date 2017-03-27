npm run bundle

CATALINA_HOME=/apps/tools/apache-tomcat-9.0.0.M18
OLDPWD=`pwd`

cd $CATALINA_HOME/bin
sh ./shutdown.sh
cd $OLDPWD
rm -rf /apps/webapp/ui/*
rsync -rv --exclude=node_modules --exclude=static /apps/source/* /apps/webapp/ui/
rm -rf /apps/webapp/web/src/main/webapp/WEB-INF/static
cp -r /apps/source/static/ /apps/webapp/web/src/main/webapp/WEB-INF/
mvn -f /apps/webapp/web/pom.xml clean package
cd $CATALINA_HOME/bin
sh ./startup.sh