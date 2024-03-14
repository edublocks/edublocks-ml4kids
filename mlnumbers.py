# This file was created by https://machinelearningforkids.co.uk/

from mlmodel import checkApiKey
import requests

def classifyNumbers(key, data):
  checkApiKey(key)

  url = ("https://machinelearningforkids.co.uk/api/scratch/" + 
         key + 
         "/classify")

  response = requests.post(url, json={ "data" : data })

  if response.ok:
    responseData = response.json()
    topMatch = responseData[0]
    return topMatch
  else:
    errorData = response.json()
    print (errorData)
    response.raise_for_status()


#
# This function will store your data in one of the training
# buckets in your machine learning project
#
#  key - API key - the secret code for your ML project 
#  data - the data that you want to store as a training example
#  label - the training bucket to put the example into
#
def storeNumbers(key, data, label):
  checkApiKey(key)
  
  url = ("https://machinelearningforkids.co.uk/api/scratch/" + 
         key + 
         "/train")

  response = requests.post(url, 
                           json={ "data" : data, "label" : label })

  if response.ok == False:
    # if something went wrong, display the error
    print (response.json())